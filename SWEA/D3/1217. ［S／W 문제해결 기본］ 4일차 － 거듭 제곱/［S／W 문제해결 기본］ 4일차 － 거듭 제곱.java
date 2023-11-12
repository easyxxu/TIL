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
		
		for(int tc = 1; tc<=10;tc++) {
			int T = Integer.parseInt(br.readLine());
			String num = br.readLine();
			st = new StringTokenizer(num);
			int N = Integer.parseInt(st.nextToken());
			int M = Integer.parseInt(st.nextToken());
			
			sb.append("#"+T+" "+(int) Math.pow(N, M)+"\n");
		}
		System.out.print(sb);
	}

}
