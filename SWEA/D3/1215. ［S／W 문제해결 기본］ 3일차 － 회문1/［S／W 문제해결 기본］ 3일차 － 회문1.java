import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		for(int tc = 1; tc <= 10; tc++) {
			int Length = Integer.parseInt(br.readLine());
			int cnt = 0;
			char[][] map = new char[8][8];
			boolean same;
			// 배열에 입력
			for(int i=0;i<8;i++) {
				String input = br.readLine();
				for(int j=0;j<8;j++) {
					map[i][j] = input.charAt(j);;
				}
			}
			// 가로 검사
			for(int i=0;i<8;i++) {
				for(int j=0;j<map.length - Length + 1;j++) {
					same=true;
					for(int k=0;k<Length/2;k++) {
						if(map[i][j+k] != map[i][j-k+Length-1]) {
							same = false;
						}
					}
					if(same)
						cnt++;
				}
			}
			// 세로 검사
			for(int i=0;i < map.length - Length + 1;i++) {
				for(int j = 0;j < 8;j++) {
					same=true;
					for(int k=0;k<Length/2;k++) {
						if(map[i+k][j] != map[i-k+Length-1][j]) {
							same=false;
						}
					}
					if(same) 
						cnt++;
				}
			}
			sb.append("#"+tc+" "+cnt+"\n");
		}
		System.out.print(sb);
	}
}
