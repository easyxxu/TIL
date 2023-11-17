import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			int N = Integer.parseInt(br.readLine()); // 총 N명
			sb.append("#"+tc+" ");
			for(int i=0;i<N;i++) {
				sb.append(1+"/"+N+" ");
			}
			sb.append("\n");
		}
		System.out.print(sb);
	}
}